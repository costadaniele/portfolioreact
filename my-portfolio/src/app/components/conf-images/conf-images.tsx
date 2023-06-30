import Image from 'next/image'

interface ConfImagesProps {
    src: string;
    alt: string;
}

interface ConfSpanProps {
    text: string;
}

export function ConfImages({ src, alt}: ConfImagesProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={40}
            height={40} />)
}

export function ConfSpan({ text }: ConfSpanProps) {
    return(
        <span className="experience-measure">{text}</span>
    )
}