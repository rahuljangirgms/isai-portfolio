import { Spinner } from "@/app/components/ui/spinner"

const variants: ("default" | "circle" | "pinwheel" | "circle-filled" | "ellipsis" | "ring" | "bars" | "infinite")[] = [
    'default', 'circle', 'pinwheel', 'circle-filled', 'ellipsis', 'ring', 'bars', 'infinite'
];

const Demo = () => (
    <div className="grid grid-cols-4 gap-16">
        {variants.map((variant) => (
            <div key={variant} className="flex flex-col items-center justify-center gap-4">
                <Spinner variant={variant as "default" | "circle" | "pinwheel" | "circle-filled" | "ellipsis" | "ring" | "bars" | "infinite"} />
                <span className="text-xs text-muted-foreground font-mono">{variant}</span>
            </div>
        ))}
    </div>
);

export default { Demo };
