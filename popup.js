const Popup = `
<div class="frame" >
    <div class="SwitcherBlock OnOffBlock">
        <div class="OnOffButton">
            Включить/выключить
        </div> 
    </div>
    <div class="SwitcherBlock ThemeBlock">
        <div class="ThemeSwitcherFrame" >
            <div class="ThemeSwitcherButton" id="light">Светлая</div>
            <div class="ThemeSwitcherButton" id="dark">темная</div>
        </div>
    </div>
    <div class="SwitcherBlock ColorBlock" >
        <div class="ColorSwitcherButton" id="red">
            <div class="ColorSwitcherColor"></div>
        </div>
        <div class="ColorSwitcherButton" id="orange">
            <div class="ColorSwitcherColor"></div>
        </div>
        <div class="ColorSwitcherButton" id="yellow">
            <div class="ColorSwitcherColor"></div>
        </div>
        <div class="ColorSwitcherButton" id="green">
            <div class="ColorSwitcherColor"></div>
        </div>
        <div class="ColorSwitcherButton" id="cyan">
            <div class="ColorSwitcherColor"></div>
        </div>
        <div class="ColorSwitcherButton" id="blue">
            <div class="ColorSwitcherColor"></div>
        </div>
        <div class="ColorSwitcherButton" id="purple">
            <div class="ColorSwitcherColor"></div>
        </div>
        <div class="ColorSwitcherButton" id="pink">
            <div class="ColorSwitcherColor"></div>
        </div>
    </div>
    <style>
    .Popup{
        width: 350px;
        position: absolute;
        top: 50px;
        right: 45px;
        visibility: hidden;
        opacity: 0;
    }
    .PopupOpen{
        visibility: visible;
        opacity: 1;
    }
    .frame {
        background: var(--ThemeBlockColor);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        color: var(--ThemeTextColor);
    }
    .SwitcherBlock, .SaveButtonBlock {
        width: 100%;
        display: flex;
        margin-top: 20px;
        justify-content: center;
    }
    .ThemeSwitcherFrame {
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        border: 3px solid var(--ThemeSwitcherColor);
        width: 95%;
    }
    .ThemeSwitcherButton {
        padding: 10px;
        cursor: pointer;
        transition: .2s;
        width: 50%;
        text-align-last: center;
        font-weight: bold;
    }
    .ThemeSwitcherButton.Select {
        background: var(--ThemeSwitcherColor);
    }
    .ColorSwitcherButton {
        width: 11.875%;
        display: grid;
        height: 43.75px;
        cursor: pointer;
        justify-content: center;
        align-items: center;
    }
    .ColorSwitcherColor {
        height: 32px;
        width: 32px;
        background: whitesmoke;
        border-radius: 35%;
        transition: .2s;
    }
    .OnOffButton {
        padding: 10px 35px;
        background: var(--ThemeSwitcherColor);
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
    }
    .ColorBlock {
        margin-bottom: 20px;
    }
    .ColorSwitcherButton.Select>.ColorSwitcherColor{
        border-radius: 50%;
    }
    #red > .ColorSwitcherColor {
        background: #f95555;
    }
    #orange > .ColorSwitcherColor {
        background: #ff8d00;
    }
    #yellow > .ColorSwitcherColor {
        background: #fff700;
    }
    #green > .ColorSwitcherColor {
        background: #11af25;
    }
    #cyan > .ColorSwitcherColor {
        background: #00b2f5;
    }
    #blue > .ColorSwitcherColor {
        background: #3f5fff;
    }
    #purple > .ColorSwitcherColor {
        background: #9d00ff;
    }
    #pink > .ColorSwitcherColor {
        background: #ff65c2;
    }
    .ColorSwitcherButton:hover > .ColorSwitcherColor {
        border-radius: 45% !important;
    }
    .ColorSwitcherButton.Select:hover > .ColorSwitcherColor {
        border-radius: 50% !important;
    }
    .PopupButton {
        position: absolute;
        right: 45px;
        top: 7px;
        width: 32px;
        height: 32px;
        background: var(--PrimaryColor);
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .DarkSwitcher-switcher{
        visibility: hidden !important;
        opacity: 0 !important;
    }
    </style>
</div>
`
const SettingsIcon = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m9.25 22-.4-3.2q-.325-.125-.612-.3-.288-.175-.563-.375L4.7 19.375l-2.75-4.75 2.575-1.95Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75 2.975 1.25q.275-.2.575-.375.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3.287.175.562.375l2.975-1.25 2.75 4.75-2.575 1.95q.025.175.025.337v.675q0 .163-.05.338l2.575 1.95-2.75 4.75-2.95-1.25q-.275.2-.575.375-.3.175-.6.3l-.4 3.2Zm2.8-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588.662-.387 1.212-.937l2.475 1.025.975-1.7-2.15-1.625q.125-.35.175-.738.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625-.975-1.7-2.475 1.05q-.55-.575-1.212-.963-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587-.663.388-1.213.938L5.55 7.15l-.975 1.7 2.15 1.6q-.125.375-.175.75-.05.375-.05.8 0 .4.05.775t.175.75l-2.15 1.625.975 1.7 2.475-1.05q.55.575 1.213.962.662.388 1.437.588Z"/></svg>
`
const ColorPalette = {
    red: '255 94 94',
    orange: '255 146 2',
    yellow: '255 226 0',
    green: '50 205 50',
    cyan: '0 180 255',
    blue: '30 137 255',
    purple: '195 137 255',
    pink: '255 101 194',
};
window.onload = function(){

    const PopupBody = document.createElement('div');
    const PopupButton = document.createElement('div');
    const App = document.querySelector('body');

    AppendElement(PopupBody,'Popup',Popup, App);
    AppendElement(PopupButton,'PopupButton',SettingsIcon, App);

    const ToggleButton = document.querySelector('.OnOffButton');
    const Switcher = document.querySelector('.PopupButton');
    const ThemeSwitcher = document.querySelectorAll('.ThemeSwitcherButton');
    const ColorSwitcher = document.querySelectorAll('.ColorSwitcherButton');

    Switcher.addEventListener('click', function(){
        PopupBody.classList.toggle('PopupOpen');
    });

    let Theme = localStorage.getItem('theme');
    let Color = localStorage.getItem('color');
    let CustomeTheme = localStorage.getItem('customeTheme');
    if(Theme == null || Color == null || CustomeTheme == null){
        App.attributes['data-theme'] == 'light';
        localStorage.setItem('theme', 'light');
        localStorage.setItem('color', 'red');
        localStorage.setItem('customeTheme', false);
        Theme = 'light';
        Color = 'red';
    };
    if(Theme == 'auto'){
        App.dataset['theme'] = 'light';
        Theme = 'light';
        localStorage.setItem('theme', 'light');
    };
    document.getElementById(Theme).classList.add('Select');
    document.getElementById(Color).classList.add('Select');

    SetTheme(Theme);
    SetColor(Color);

    for(let i = 0; i < ColorSwitcher.length; i++){
        ColorSwitcher[i].addEventListener('click', () => {
            DisableSelect('.ColorSwitcherButton.Select');
            if(ColorSwitcher[i].className == 'ColorSwitcherColor'){
                ColorSwitcher[i].parentNode.classList.add('Select');
            }else{
                ColorSwitcher[i].classList.add('Select');
            };
            localStorage.setItem('color', ColorSwitcher[i].id);
            SetColor(ColorSwitcher[i].id)
        });
    };
    for(let i = 0; i < ThemeSwitcher.length; i++){
        ThemeSwitcher[i].addEventListener('click', () => {
            DisableSelect('.ThemeSwitcherButton.Select');
            ThemeSwitcher[i].classList.add('Select');
            App.dataset['theme'] = ThemeSwitcher[i].id;
            localStorage.setItem('theme', ThemeSwitcher[i].id);
            SetTheme(ThemeSwitcher[i].id)
        });
    };
    ToggleButton.addEventListener('click', () => {
        const CustomeTheme = localStorage.getItem('customeTheme') == 'true' ? true : false;
        localStorage.setItem('customeTheme', !CustomeTheme);
        window.location.reload();
    });
};
function AppendElement(Element,Style,innerHTML,App){
    Element.className = Style;
    Element.innerHTML = innerHTML;
    App.append(Element);
};
function SetTheme(Theme){
    const root = document.documentElement.style;
    if(Theme == 'light'){
        root.setProperty('--BackgroundColor', 'whitesmoke');
        root.setProperty('--BlockColor', 'white');
        root.setProperty('--ThemeBlockColor', 'white');
        root.setProperty('--ThemeSwitcherColor', 'whitesmoke');
        root.setProperty('--ThemeTextColor', 'black');
    }else{
        root.setProperty('--BackgroundColor', 'black');
        root.setProperty('--BlockColor', '#f1f1f1');
        root.setProperty('--ThemeBlockColor', '#121212');
        root.setProperty('--ThemeSwitcherColor', '#303030');
        root.setProperty('--ThemeTextColor', 'white');
    }
};
function SetColor(Color){
    const root = document.documentElement.style;
    root.setProperty('--Color', ColorPalette[Color]);
};
function DisableSelect(Select){
    let SelectList = document.querySelectorAll(Select);
    for(let i = 0; i < SelectList.length; i++) {
        SelectList[i].classList.remove('Select');
    };
};