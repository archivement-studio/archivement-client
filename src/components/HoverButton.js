import './HoverButton.css'

export default function HoverButton({ button_label, handleclick }){
    return(
        <div className='button-border'>
            <div className='hover-button'>
                <input type="button" onClick={handleclick} />
                <div>
                    <span>{button_label}</span>
                </div>
            </div>
        </div>
    );
}