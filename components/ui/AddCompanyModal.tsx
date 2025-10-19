import React from 'react';
import { Input } from './Input';
import { Button } from './Button';

export interface AddCompanyModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: (company: {
        name: string;
        ceo: string;
        revenue: number;
        profit: number;
        ebitda: number;
        margin: number;
        insights: string[];
    }) => void;
}

export const AddCompanyModal: React.FC<AddCompanyModalProps> = ({ open, onClose, onConfirm }) => {
    const [name, setName] = React.useState('');
    const [ceo, setCeo] = React.useState('');
    const [revenue, setRevenue] = React.useState('');
    const [profit, setProfit] = React.useState('');
    const [ebitda, setEbitda] = React.useState('');
    const [margin, setMargin] = React.useState('');
    const [insights, setInsights] = React.useState('');

    const handleConfirm = () => {
        onConfirm({
            name,
            ceo,
            revenue: Number(revenue),
            profit: Number(profit),
            ebitda: Number(ebitda),
            margin: Number(margin),
            insights: insights.split(',').map(i => i.trim()).filter(Boolean),
        });
        // Reset form
        setName('');
        setCeo('');
        setRevenue('');
        setProfit('');
        setEbitda('');
        setMargin('');
        setInsights('');
        onClose();
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-black">Add New Company</h2>
                <div className="space-y-3 sm:space-y-4">
                    <Input label="Company Name" value={name} onChange={e => setName(e.target.value)} required />
                    <Input label="CEO" value={ceo} onChange={e => setCeo(e.target.value)} required />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <Input label="Revenue (M)" type="number" value={revenue} onChange={e => setRevenue(e.target.value)} required />
                        <Input label="Profit (M)" type="number" value={profit} onChange={e => setProfit(e.target.value)} required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <Input label="EBITDA (M)" type="number" value={ebitda} onChange={e => setEbitda(e.target.value)} required />
                        <Input label="Gross Margin (%)" type="number" value={margin} onChange={e => setMargin(e.target.value)} required />
                    </div>
                    <Input
                        label="Key Insights (comma separated)"
                        value={insights}
                        onChange={e => setInsights(e.target.value)}
                        placeholder="e.g., High Growth, Tech Leader"
                    />
                </div>
                <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 mt-6 sm:mt-8">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="w-full sm:w-auto"
                        size="lg"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleConfirm}
                        className="w-full sm:w-auto"
                        size="lg"
                    >
                        Add Company
                    </Button>
                </div>
            </div>
        </div>
    );
};
