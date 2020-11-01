import React, { useState } from 'react';
import './style.css';

/**
* @author Rizwan Khan
* @function 
**/

const Modal = (props) => {
    if (!props.visible) {
        return null;
    }
    return (
        <>
            <div className="modalFixedBg">
                <div style={{ position: 'relative' }}>
                    <div className="modalClose" onClick={props.onClose}>X</div>
                    <div className="modalContainer">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

const MaterialInput = (props) => {
    const [focus, setFocus] = useState(false);

    return (
        <div className="materialInput">
            <label className={`label ${focus ? 'focus' : ''}`} style={{
                top: 0,
                lineHeight: 'none'
            }}>{props.label}</label>
            <div style={{
                display: 'flex'
            }}>
                <input className="input"
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                    onFocus={(e) => {
                        setFocus(true)
                    }}
                    onBlur={(e) => {
                        if(e.target.value === ""){
                            setFocus(false)
                        }
                    }} />
                {
                    props.rightElement ? props.rightElement : null
                }
            </div>
        </div>
    )
}

const MaterialButton = (props) => {

    const onClick = () => {
        props.onClick && props.onClick();
    }
    return (
        <div style={{ 
            width: '90%', 
            ...props.style 
            }}>
            <button
                className="materialButton"
                style={{
                    backgroundColor: props.bgColor,
                    color: props.textColor,
                }}
                onClick={onClick}
            >
                {props.icon && props.icon}
                {props.title && props.title}
            </button>
        </div>

    )
}

const DropdownMenu = (props) => {
    return (
      <div className="headerDropdownContainer">
        {props.menu}
        <div className="dropdown">
          <div className="upArrow"></div>
          {props.firstMenu}
          <ul className="headerDropdownMenu">
            {
              props.menus && props.menus.map((item, index) =>
                <li key={index}>
                    <a onClick={(e) => {
                        e.preventDefault();
                        item.onClick && item.onClick()
                    }} 
                        href={item.href}>{item.label}
                    </a>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }

export {
    Modal,
    MaterialInput,
    MaterialButton,
    DropdownMenu
}