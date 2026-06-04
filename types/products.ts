export type Product = {
    id: number;
    image: string;
    level: string;
    levelColor?: string;
    name: string;
    subtitle: string;
    price: string;
    originalPrice: string;
    prefix: string;
    slug: string;
    badge?: string;
    badgeColor?: string;
    buttonLabel: string;
    buttonStyle: "teal" | "yellow";
};