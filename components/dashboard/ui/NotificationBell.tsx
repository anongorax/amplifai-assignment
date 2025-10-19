import { Bell } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

type NotificationBellProps = {
    hasNotification: boolean;
} & LucideProps;

export const NotificationBell = ({
    hasNotification,
    ...props
}: NotificationBellProps) => {
    return (
        <div className="relative inline-block">
            {/* The Bell Icon */}
            <Bell {...props} />

            {/* The Red Dot (conditionally rendered) */}
            {hasNotification && (
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
            )}
        </div>
    );
};