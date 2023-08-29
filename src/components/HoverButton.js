import './HoverButton.css'

export default function HoverButton({ button_label, onclick }){
    return(
        <div className='button-border'>
            <div className='hover-button'>
                <input type="button" onClick={onclick}/>
                <div>
                    <span>{button_label}</span>
                </div>
            </div>
        </div>
    );
}