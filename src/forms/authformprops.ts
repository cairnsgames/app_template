export interface AuthFormProps {
    onClose: () => void;
    onSignin: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onSignup: (ev: React.FormEvent<HTMLFormElement>) => void;
    onMagic: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onForgot: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}