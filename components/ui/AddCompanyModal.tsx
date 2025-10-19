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
        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black">Add New Company</h2>
                <div className="space-y-2 sm:space-y-3">
                    <Input label="Company Name" value={name} onChange={e => setName(e.target.value)} />
                    <Input label="CEO" value={ceo} onChange={e => setCeo(e.target.value)} />
                    <Input label="Revenue" type="number" value={revenue} onChange={e => setRevenue(e.target.value)} />
                    <Input label="Profit" type="number" value={profit} onChange={e => setProfit(e.target.value)} />
                    <Input label="EBITDA" type="number" value={ebitda} onChange={e => setEbitda(e.target.value)} />
                    <Input label="Gross Margin" type="number" value={margin} onChange={e => setMargin(e.target.value)} />
                    <Input label="Key Insights (comma separated)" value={insights} onChange={e => setInsights(e.target.value)} />
                </div>
                <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <Button variant="ghost" onClick={onClose} fullWidth className="sm:w-auto">Cancel</Button>
                    <Button variant="primary" onClick={handleConfirm} fullWidth className="sm:w-auto">Add Company</Button>
                </div>
            </div>
        </div>
    );
};
