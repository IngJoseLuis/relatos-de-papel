import '../../styles/components-styles/glass-button.css'

export default function GlassButton({ text, onClick, type = 'button' }) {
    return (
        <button
            type={type}
            className="glass-button glass"
            onClick={onClick}
        >
            {text}
        </button>
    )
}
