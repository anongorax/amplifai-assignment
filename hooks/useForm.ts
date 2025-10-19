import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { FormState, FormConfig, ValidatorFn, ValidationError } from '@/types';

/**
 * Custom hook for form state management and validation
 * @param config - Form configuration with initial values and validators
 * @returns Form state and handlers
 */
export function useForm<T extends string>(config: FormConfig<T>) {
  // Initialize form state
  const [formState, setFormState] = useState<FormState<T>>(() => {
    const initialState = {} as FormState<T>;
    Object.keys(config).forEach((key) => {
      const field = key as T;
      initialState[field] = {
        value: config[field].initialValue || '',
        error: null,
        touched: false,
      };
    });
    return initialState;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Validate a single field
   */
  const validateField = useCallback(
    (fieldName: T, value: string): ValidationError => {
      const validators = config[fieldName]?.validators || [];
      
      for (const validator of validators) {
        const error = validator(value);
        if (error) return error;
      }
      
      return null;
    },
    [config]
  );

  /**
   * Validate all fields
   */
  const validateForm = useCallback((): boolean => {
    let isValid = true;
    const newFormState = { ...formState };

    Object.keys(config).forEach((key) => {
      const field = key as T;
      const error = validateField(field, formState[field].value);
      
      newFormState[field] = {
        ...formState[field],
        error,
        touched: true,
      };

      if (error) isValid = false;
    });

    setFormState(newFormState);
    return isValid;
  }, [formState, config, validateField]);

  /**
   * Handle input change
   */
  const handleChange = useCallback(
    (fieldName: T) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.type === 'checkbox' ? String(e.target.checked) : e.target.value;
      
      setFormState((prev) => ({
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          value,
          error: prev[fieldName].touched ? validateField(fieldName, value) : null,
        },
      }));
    },
    [validateField]
  );

  /**
   * Handle input blur
   */
  const handleBlur = useCallback(
    (fieldName: T) => () => {
      setFormState((prev) => ({
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          touched: true,
          error: validateField(fieldName, prev[fieldName].value),
        },
      }));
    },
    [validateField]
  );

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    (onSubmit: (values: Record<T, string>) => void | Promise<void>) =>
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!validateForm()) {
          return;
        }

        setIsSubmitting(true);

        try {
          const values = Object.keys(formState).reduce((acc, key) => {
            acc[key as T] = formState[key as T].value;
            return acc;
          }, {} as Record<T, string>);

          await onSubmit(values);
        } catch (error) {
          console.error('Form submission error:', error);
        } finally {
          setIsSubmitting(false);
        }
      },
    [formState, validateForm]
  );

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    const resetState = {} as FormState<T>;
    Object.keys(config).forEach((key) => {
      const field = key as T;
      resetState[field] = {
        value: config[field].initialValue || '',
        error: null,
        touched: false,
      };
    });
    setFormState(resetState);
    setIsSubmitting(false);
  }, [config]);

  /**
   * Set field value programmatically
   */
  const setFieldValue = useCallback((fieldName: T, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        value,
        error: prev[fieldName].touched ? validateField(fieldName, value) : null,
      },
    }));
  }, [validateField]);

  /**
   * Set field error programmatically
   */
  const setFieldError = useCallback((fieldName: T, error: ValidationError) => {
    setFormState((prev) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        error,
        touched: true,
      },
    }));
  }, []);

  /**
   * Get field props for easy binding
   */
  const getFieldProps = useCallback(
    (fieldName: T) => ({
      value: formState[fieldName].value,
      onChange: handleChange(fieldName),
      onBlur: handleBlur(fieldName),
      error: formState[fieldName].error,
    }),
    [formState, handleChange, handleBlur]
  );

  return {
    formState,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    validateForm,
    setFieldValue,
    setFieldError,
    getFieldProps,
  };
}
