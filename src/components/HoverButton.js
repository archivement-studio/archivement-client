import './HoverButton.css'

export default function HoverButton({ button_label }){
    return(
        <div className='button-border'>
            <div className='hover-button'>
                <input type="button"/>
                <div>
                    <span>{button_label}</span>
                </div>
            </div>
        </div>
    );
}