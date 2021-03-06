import * as React from "react";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: React.ReactNode;
    value: string | number;
    type?: string;
    name: string;
    format: "default" | "error" | "success";
    errorMessage?: string;
    isValid?: boolean;
    onChange?: (e: React.ChangeEvent<any>) => void;
}
export declare const InputText: React.SFC<Props>;
export {};
