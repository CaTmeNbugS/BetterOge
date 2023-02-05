const style = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Open+Sans&family=Roboto:wght@500&display=swap');
:root{
    --Color: 195 137 255;
    --PrimaryColor: rgb(var(--Color));
    --PrimaryColorShadow: rgb(var(--Color) / 42%);
    --BackgroundColor: whitesmoke;
    --BlockColor: white;
}
.Se5da2342e2.S7a115159b1.Sea6a59c6a1 {
    display: none !important;
}
.Se5da2342e2.S47baa5eae0 {
    display: none !important;
}
.Se534f0c2cb {
    display: none !important;
}
.Sf7efa7bc1fInfo.Sf7efa7bc1f-Info {
    display: none !important;
}
.s54a65f4s5d {
    display: none !important;
}
nav.Sf7efa7bc1fMenu.Sf7efa7bc1f-Menu {
    display: none !important;
}
body{
    background: var(--BackgroundColor) !important;
}
body[data-theme=light]{
    background: var(--BackgroundColor) !important;
}
body[data-theme=dark] {
    background: var(--BackgroundColor) !important;
}
.Section {
    border-top: none;
}
.TwoColumns-Col_1, .TwoColumns-Col_2  {
    border-radius: 8px !important;
    padding: 15px 20px !important;
    background: var(--BlockColor);
    box-shadow: 0 0 5px 1px #ffffff6b;
    border: none !important;
}
.Grid {
    grid-gap: 1rem;
}
.Grid.TwoColumns-Grid {
    margin: 10px 0px;
}
.Title_level_2 {
    margin-bottom: 15px;
    color: black;
    font-family: 'Inter';
}
.Text {
    text-align: start;
    text-indent: 0 !important;
    word-wrap: break-word;
    font-family: 'Roboto';
    font-size: 15px;
    margin-left: 3px;
}
input.Input.Form-Input_oneLine {
    padding: 10px 15px;
    border-radius: 5px;
    font-family: 'Open Sans';
    font-size: 15px;
    border: 2.5px solid whitesmoke;
    background: whitesmoke;
}
.Button_view_default {
    color: #000;
    background: var(--PrimaryColor) !important;
    box-shadow: none;
    box-shadow: 0px 0px 10px 0px var(--PrimaryColorShadow);
    transition: .2s;
    font-family: 'Inter';
    padding-top: 6px;
}
.Button_view_default:hover {
    background: var(--PrimaryColorShadow)  !important;
    box-shadow: none;
}
.Input:focus, .Input_focused {
    box-shadow: 0px 0px 10px 0px var(--PrimaryColorShadow);
    border: 2.5px solid var(--PrimaryColor) !important;
}
.Input:focus, .Input:hover, .Input_focused {
    transition: .15s ease-out !important;
}
.Input:hover:not(.Input:focus):not(.Input_focused) {
    background: whitesmoke;
}
button.Button.Button_view_default.TeacherVariant-Button {
    margin-left: 10px;
}
.PageLayout-Sf7efa7bc1f {
    display: none !important;
}
.PageLayout-Grid {
    display: block !important;
    max-width: 800px;
    place-self: center;
}
.PageLayout {
    display: grid;
}
Section > h2.Title.Title_level_2 {
    background:  var(--BlockColor);
    padding: 15px 20px;
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0 0 5px 1px #ffffff6b;
    margin: 1rem 0px 0px 0px;
}
Section > h2.Title.Title_level_2+p.Text.Section-Desc {
    background:  var(--BlockColor);
    padding: 5px 20px 20px 23px;
    margin-left: 0px;
    border-radius: 0px 0px 5px 5px;
}
a.Link.Link_static {
    border-bottom: 3px solid var(--PrimaryColor);
    transition: .2s;
    padding: 2px 5px;
    color: black;
}
.Link:hover {
    color: black !important;
    transition: .2s !important;
    background: var(--PrimaryColor) !important;
    border-color: var(--PrimaryColor) !important;
}
.ConstructorForm-Row.ConstructorForm-Row_head {
    display: none;
}
.ConstructorForm-ButtonsPanel {
    border-radius: 5px;
    background:  var(--BlockColor);
    padding: 15px;
    box-shadow: 0 0 5px 1px #ffffff6b;
    margin-top: 0;
}
.ConstructorForm-Buttons {
    min-width: 220px !important;
}
label.Label.Switcher-Label.Switcher_vertical-Label.Switcher_checkbox-Label:first-child {
    border-bottom: 0px !important;
    border-radius: 7px 7px 0px 0px !important;
}
.Switcher_checkbox-Label {
    border: 3px solid var(--PrimaryColor) !important;
}
.Switcher-Text {
    color: black;
}
.ConstructorForm-Switcher {
    margin-top: 4px;
}
label.Label.Switcher-Label.Switcher_vertical-Label.Switcher_checkbox-Label:last-child {
    border-radius: 0px 0px 7px 7px;
}
.Switcher_checkbox-Label:hover {
    background: var(--PrimaryColorShadow)!important;
}
.Switcher_checkbox-Label:hover .Switcher_checkbox-FakeCheckbox {
    background: var(--PrimaryColor)!important;
}
.Switcher_checkbox-FakeCheckbox {
    border: 1px solid var(--PrimaryColor);
}
span.Input.FakeCheckbox.FakeCheckbox_blue.Switcher_checkbox-FakeCheckbox:hover {
    background: var(--PrimaryColor) !important;
}
button.Button.Button_view_default.Button_size_l.ConstructorForm-SubmitButton {
    padding-top: 14px !important;
}
u.Link-U.Link_wrap-U.Link_pseudo-U.ConstructorForm-ResetButtonText {
    font-family: 'Inter';
    border: none !important;
}
span.Link_wrap-U {
    color: black !important;
    font-weight: bold;
}
button.Link.Link_wrap.Link_pseudo.ConstructorForm-ResetButton:hover {
    background: #ffffff29 !important;
}
button.Link.Link_wrap.Link_pseudo.ConstructorForm-ResetButton {
    background: none !important;
    padding-top: 4.9px;
    color: black;
}
.ConstructorForm-Row.ConstructorForm-Row_label {
    display: none;
}
.ConstructorForm-TopicList {
    background:  var(--BlockColor);
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px #ffffff6b;
}
input.Input.Counter-Input {
    border: 2.5px solid var(--BlockColor);
}
.Counter-Button:not(.Counter-Button_disabled):hover {
    color: var(--PrimaryColor);
    border: 2.5px solid var(--PrimaryColor);
    cursor: pointer;
    transition: .15s;
}
button.Counter-Button {
    height: 32.5px !important;
    width: 33.5px !important;
    border: 2px solid var(--BlockColor);
    font-weight: bold;
}
.Link.Link_wrap.Link_pseudo.ConstructorForm-TopicName.ConstructorForm-TopicName_type_default.Link_pseudoBlack:hover {
    background: whitesmoke !important;
    border-radius: 5px;
}
u.Link-U.Link_wrap-U.Link_pseudo-U.Link_pseudoBlack-U {
    border: none !important;
}
.ConstructorForm-Topic {
    display: grid;
    align-content: center;
    transition: .1s;
    border-radius: 5px;
    font-family: 'Roboto';
}
.ConstructorForm-Counter {
    width: 110px !important;
}
.ConstructorForm-TopicNumber {
    align-self: center;
    justify-self: center;
}
.Counter.ConstructorForm-Counter {
    align-self: center;
}
.Link.Link_wrap.Link_pseudo.ConstructorForm-TopicName.ConstructorForm-TopicName_type_default.Link_pseudoBlack {
    padding: 6px 0px;
}
label.Link_wrap.ConstructorForm-TopicName.Label {
    padding: 4px 0px;
    align-items: center;
}
span.Input.FakeCheckbox.ConstructorForm-TopicSubCheckbox {
    background: var(--PrimaryColor);
}
span.Input.FakeCheckbox.ConstructorForm-TopicSubCheckbox:hover {
    background: var(--PrimaryColor) !important;
    box-shadow: 0 0 11px 2px var(--PrimaryColorShadow);
}
a.Link.Link_black {
    padding: 5px;
    font-family: 'inter';
}
label.Link_wrap.ConstructorForm-TopicName.CheckAll.Label >.ConstructorForm-TopicNumber {
    margin-top: -42px;
    margin-right: 22px;
}
.OurVariants-Grid {
    grid-gap: 0.55rem !important;
}
a.Link.VariantLink.OurVariants-Link {
    background: var(--BlockColor) !important;
    border: 2.5px solid var(--BlockColor);
    padding: 10px 5px;
    color: black;
    font-family: 'inter';
    box-shadow: 0 0 5px 1px #ffffff6b;
}
a.Link.VariantLink.OurVariants-Link:hover {
    background: var(--PrimaryColor) !important;
    border: 2.5px solid var(--PrimaryColor) !important;
    box-shadow: 0 0 10px 2px var(--PrimaryColorShadow);
}
section.Section.OurVariants {
    margin-bottom: 1rem !important;
}
.OurVariants-PersonalBox {
    margin-top: 1rem !important;
}
a.Link.VariantLink.Link_static.OurVariants-PersonalLink {
    background: var(--BlockColor) !important;
    border: 2.5px solid var(--BlockColor);
    padding: 10px 20px;
    box-shadow: 0 0 5px 1px #ffffff6b;
    color: black;
    font-family: 'Open sans';
    font-weight: bold;
}
a.Link.VariantLink.Link_static.OurVariants-PersonalLink:hover {
    background: var(--PrimaryColor)!important;
    border: 2.5px solid var(--PrimaryColor) !important;
    box-shadow: 0px 0px 10px 0px var(--PrimaryColorShadow);
}
.ComplexHeader.Section-ComplexHeader {
    background: var(--BlockColor);
    padding: 15px 20px 0px 20px;
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0 0 5px 1px #ffffff6b;
    margin: 1rem 0px 0px 0px;
}
.ComplexHeader.Section-ComplexHeader+p.Text.Section-Desc {
    background: var(--BlockColor);
    padding: 0px 20px 20px 23px;
    margin-left: 0px;
    border-radius: 0px 0px 5px 5px;
}
.ComplexHeader-Link.ComplexHeader-Link_desktop {
    font-family: 'inter';
}
.Title-Caption {
    font-weight: normal;
    color: var(--PrimaryColor);
    vertical-align: middle;
    margin-left: 10px;
}
.Link-U:not(.Link_static-U):not(.Link_black-U):not(.Link_white-U):not(.Link_pseudo-U):visited, .Link:not(.Link_static):not(.Link_black):not(.Link_white):not(.Link_pseudo):visited {
    color: black !important;
    border-color: var(--BlockColor) !important;
}
header.Header.PageLayout-Header {
    display: none;
}
.SubjectMenu-Tab {
    background: #ededed;
    box-shadow: none !important;
    padding: 10px 8px;
    font-family: 'Inter';
    font-size: 12.5px;
    margin: 2.5px 2px;
    border-radius: 5px;
}
nav.SubjectMenu.SubjectMenu_desktop.PageLayout-Nav {
    background: var(--BlockColor);
    max-width: 1000px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 7px 0px;
}
.SubjectMenu_desktop-Tab:hover {
    color: var(--PrimaryColor) !important;
}
.SubjectMenu-Popup {
    width: 170px;
    border-radius: 5px !important;
    padding: 3px 2px;
    box-shadow: 0 0 10px 0px #ffffff61;
}
.kNLp4JurRGw34s9Y {
    display: none;
    visibility: hidden;
    width: 0px !important;
    padding: 0px !important;
    border: none !important;
    
    
    
    
}
.new_topheader {
    display: none;
}
.kNrBBNtTAHw {
    display: none;
    visibility: hidden;
    opacity: 0;
}
.kK7h3M5jfFQjj89uVXaIS07E {
    margin: 0px !important;
    display: grid;
    justify-content: center;
}
.sb171f6a6 {
    max-width: 800px;
}
.sb171f6a6 > div:nth-child(1) {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    height: 0px !important;
    margin: 0 !important;
}
.sb171f6a6 > div:nth-child(2) {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    height: 0px !important;
    margin: 0 !important;
}
.sb171f6a6 > div:nth-child(3) {
    background: var(--BlockColor);
    color: black !important;
    border-radius: 5px 5px 0px 0px;
    border: none !important;
    padding: 15px 20px !important;
    font-family: 'Inter';
    font-size: 20px !important;
    margin: 1rem 0px 0px 0px !important;
    width: auto !important;
}
.sb171f6a6 > center:nth-child(4) {
    display: none;
}
.sb171f6a6 > p:nth-child(5) {
    background: var(--BlockColor);
    padding: 0px 20px 15px 23px;
    font-family: 'Roboto';
    font-size: 15px !important;
    text-align: start;
    overflow-wrap: break-word;
}
.sb171f6a6 > br:nth-child(6) {
    display: none;
}
    .sb171f6a6 > p:nth-child(7) {
    background: var(--BlockColor);
    padding: 0px 20px 15px 23px;
    font-family: 'Roboto';
    font-size: 15px !important;
    text-align: start;
    overflow-wrap: break-word;
    border-radius: 0px 0px 5px 5px;
    margin-bottom: 1rem;
}
.sb171f6a6> a:nth-child(9) {
    background: var(--PrimaryColor);
    text-decoration: none;
    font-family: 'inter';
    padding: 13px 15px;
    border-radius: 0.5rem;
    font-size: 13px;
    margin: 10px!important;
    box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
    transition: .2s;
    color: black;
}
.sb171f6a6 > a:nth-child(9):hover {
    box-shadow: 0 0 10px 0px white;
    color: black;
    background: var(--PrimaryColorShadow);
}
.prob_list hr {
    display: none;
}
span.prob_nums {
    font-family: 'Inter';
    font-size: 15px;
    display: flex;
    align-items: center;
}
span.prob_nums a {
    color: black;
    text-decoration: none;
    border-bottom: 3px solid var(--PrimaryColor);
    transition: .1s;
    margin-left: 5px;
    padding: 2px 5px;
}
span.prob_nums a:hover {
    background: var(--PrimaryColor);
}
.pbody, .pbody div, .solution, .solution div, .probtext div {
    font-family: 'Roboto';
    font-size: 15px;
    text-indent: 0px !important;
    margin: 10px 0px 0px 10px;
}
.nobreak > span:nth-child(4) > a {
    color: black !important;
    text-decoration: none !important;
    border: none !important;
    font-family: 'Inter';
    font-size: 14.5px;
    padding: 5px 10px;
    background: var(--PrimaryColor);
    border-radius: 5px;
    transition: .1s;
        box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
}
.nobreak > span:nth-child(4) > a:hover {
    background: var(--PrimaryColorShadow);
    box-shadow: none;
}
.nobreak > span:nth-child(4) {
    display: inline-flex;
    margin-top: 5px
}
.nobreak > span:nth-child(5) > a {
    color: black !important;
    text-decoration: none !important;
    border: none !important;
    font-family: 'Inter';
    font-size: 14.5px;
    padding: 5px 10px;
    background: var(--PrimaryColor);
    border-radius: 5px;
    transition: .1s;
    box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
}
.nobreak > span:nth-child(5) > a:hover {
    background: var(--PrimaryColorShadow);
    box-shadow: none;
}
.nobreak > span:nth-child(5) {
    display: inline-flex;
    margin-top: 10px
}
.nobreak > br:nth-child(6) {
    display: none;
}
.nobreak > br:nth-child(7) {
    display: none;
}
.minor {
    display: none;
}
.prob_view {
    background: var(--BlockColor);
    border-radius: 5px;
    padding: 15px 20px;
    font-family: 'Inter';
    font-size: 16px;
    margin-bottom: 1rem !important;

}
input.test_inp {
    padding: 5px 10px;
    border-radius: 5px;
    font-family: 'Open Sans';
    font-size: 15px;
    border: 2.5px solid whitesmoke !important;
    background: whitesmoke;
    box-shadow: none;
    outline: none;
    font-family: 'Inter';
    margin-left: 1rem;
    transition: .1s;
}
input.test_inp:focus {
    box-shadow: 0px 0px 10px 0px var(--PrimaryColorShadow);
    border: 2.5px solid var(--PrimaryColor) !important;
}
.prob_list .prob_num {
    border: none;
    background: var(--PrimaryColor);
    border-radius: 5px;
    font-family: 'Inter';
    width: 25px;
    margin-top: 29px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    height: 25px;
    align-items: center;
    margin-right: 15px !important;
    box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
}
.Timer.Timer_view_sticky {
    display: grid;
    padding: 10px;
    box-shadow: 0 0 10px 0px #ffffff7a;
    border-radius: 0px 0px 5px 5px;
    background: #d9d9d9;
    min-width: 145px;
    justify-content: center;
}
.Timer.Timer_view_sticky > table {
    font-family: 'Inter';
    font-size: 13px;
    min-width: 125px;
}
input.Button.Button_view_default {
    font-family: 'Inter';
    font-size: 14px;
    padding: 10px;
}
.Timer {
    min-width: 145px;
    background: #d9d9d9;
    padding: 10px;
    border-radius: 5px 5px 0px 0px;
    font-family: 'Inter';
    font-size: 13px;
    display: grid;
    justify-content: center;
}
.Timer > table {
    min-width: 125px;
}
.Test-TimerBox.Test-TimerBox_view_sticky {
    margin-bottom: 1rem;
    
}
#bigBanner {
    display: none;
    visibility: hidden;
}
.InfoDel {
    display: none !important;
    height: 0px !important;
}


.pred, .pred_v {
    background: #ededed;
    box-shadow: none !important;
    padding: 10px 8px !important;
    font-family: 'Inter' !important;
    font-size: 12.5px !important;
    margin: 2.5px 2px !important;
    border-radius: 5px;
}
.subj_nav {
    background: var(--BlockColor);
    max-width: 1000px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 7px 0px;
}
.pred:hover, .pred_v:hover {
    color: var(--PrimaryColor) !important;
}
.topmenu_dd_c {
    width: 170px;
    border-radius: 5px !important;
    padding: 3px 2px;
    box-shadow: 0 0 10px 0px #ffffff61;
    background: #f8fbfd;
}
.topmenu_dd .pred {
    background: #ededed !important;
}
.ui-resizable-handle.ui-resizable-n, .ui-resizable-handle.ui-resizable-e, .ui-resizable-handle.ui-resizable-s, .ui-resizable-handle.ui-resizable-w {
    display: none !important;
    opacity: 0;
}
div#continue_test {
    color: black;
    font-family: 'inter';
    padding: 0px 15px;
    width: auto !important;
    height: auto !important;
}
.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.ui-draggable.ui-resizable {
    background: var(--BlockColor);
    border: none !important;
    width: 300px !important;
    height: 200px !important;
}
.ui-dialog-titlebar.ui-widget-header.ui-corner-all.ui-helper-clearfix.ui-draggable-handle {
    border: none !important;
    background: none;
    border-radius: 0 !important;
    border-bottom: 3px solid #cdcdcd !important;
}
a.a_btn {
    margin: 15px 0px;
    font-family: 'inter';
    background: var(--PrimaryColor);
    border: none !important;
    padding: 10px;
    font-size: 13px;
    color: black;
    box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
    transition: .1s;
}
a.a_btn:hover {
    color: black !important;
    background: var(--PrimaryColorShadow);
    box-shadow: none;
}
button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close {
    background: var(--PrimaryColor);
    border: 1px solid var(--PrimaryColor);
    transition: .1s;
}
button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close:hover {
    background: #ff7979;
    border: 1px solid #ff7979;
}
.skipped_probs {
    padding: 10px 15px;
    max-height: fit-content;
    background: var(--BlockColor);
    max-width: fit-content;
    margin-right: 15px;
    border-radius: 5px;
}
.skipped_probs > div {
    font-family: 'roboto';
    font-size: 14px;
    padding: 5px 15px;
    text-align: center !important;
    border-bottom: 3px solid #c9c9c9;
    transition: .2s;
    margin: 6px 0px;
}
.skipped_probs > div:hover {
    background: #c9c9c9;
    border-radius: 5px;
}
.skipped_probs > div:first-child {
    margin-top: -3px;
    background: var(--PrimaryColor) !important;
    width: 10px !important;
    height: 10px !important;
}
.minimize_btn {
    width: auto !important;
    height: auto !important;
    border: 1px solid !important;
}
.Submit > input {
    background: var(--PrimaryColor);
    box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
    padding: 12px 25px;
    font-family: 'inter';
    font-size: 13px;
    transition: .2s;
}
.Submit > input:hover {
    background: var(--PrimaryColorShadow);
    box-shadow: none;
}
.Footer-Menu > a {
    padding: 5px;
    font-family: 'inter';
    text-decoration: none;
    font-size: 14px;
    border-bottom: 1px solid rgba(0,0,0,.25);
    transition: .2s;
}
.Footer-Menu > a:hover {
    color: black !important;
    transition: .2s !important;
    background: var(--PrimaryColor) !important;
    border-color: var(--PrimaryColor) !important;
}
.Footer-Menu > a:visited {
    color: black;
}
span.pager_page {
    border: none;
    color: black;
    font-family: 'inter';
    padding: 6px 10px;
    background: var(--PrimaryColor);
    border-radius: 5px;
    font-size: 14px;
    box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
    transition: .2s;
}
span.pager_page:hover {
    background: var(--PrimaryColorShadow);
    box-shadow: none;
}
.prob_pager_static {
    margin-bottom: 15px;
}
select.orange_select {
    background: var(--BlockColor);
    padding: 10px 15px;
    font-family: 'inter';
    font-size: 14px;
    border: 3px solid var(--PrimaryColor);
    margin-top: -61px;
    margin-right: 20px;
    outline: none;
    cursor: pointer;
}
.TestLink {
    font-family: 'inter';
    padding: 10px 15px;
    background: var(--BlockColor);
    font-size: 13px;
    border-radius: 5px;
    margin-right: 7px;
    cursor: pointer;
    transition: .2s !important;
}
.LinksBlock {
    display: inline-flex;
}
.prob_list {
    margin-top: -40px;
}
.prob_pager_static {
    margin-bottom: 20px;
}
.prob_list {
    margin-top: -45px;
}
a{
    text-decoration: none;
}
.prob_pager {
    background: var(--BlockColor);
    padding: 15px;
    margin: 0;
    border: 3px solid var(--BackgroundColor);
}
img.briefcase {
    display: none;
}
a.adashed {
    color: black !important;
    text-decoration: none !important;
    border: none !important;
    font-family: 'Inter';
    font-size: 14.5px;
    padding: 5px 10px;
    background: var(--PrimaryColor);
    border-radius: 5px;
    transition: .1s;
    box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
}
a.adashed:hover {
    background: var(--PrimaryColorShadow);
    box-shadow: none;
}
.expand {
    margin-top: 20px;
}
a {
    color: black;
    border-bottom: 3px solid var(--PrimaryColor);
    transition: .1s;
    font-family: 'inter';
}
a:hover {
    color: black;
    background: var(--PrimaryColor);
}
.LinksBlock > a {
    border: none !important;
}
.LinksBlock > a:hover {
    background: none;
}
.left_margin > img {
    margin-top: -15px !important;
}
.prob_view > div > div > div > div:last-child > input:first-child {
    padding: 5px 10px;
    border-radius: 5px;
    font-family: 'Roboto' !important;
    font-size: 15px;
    border: 2.5px solid whitesmoke !important;
    background: whitesmoke;
    box-shadow: none;
    outline: none;
    font-family: 'Inter';
    margin-left: 1rem;
    transition: .1s;
    margin: 15px 15px 15px 0px;
    width: 300px;
}
.prob_view > div > div > div > div:last-child > input:first-child:focus {
    box-shadow: 0px 0px 10px 0px var(--PrimaryColorShadow);
    border: 2.5px solid var(--PrimaryColor) !important;
}
.prob_view > div > div > div > div:last-child > input:last-child {
    color: black !important;
    text-decoration: none !important;
    border: none !important;
    font-family: 'Inter';
    font-size: 14.5px;
    padding: 7.5px 12px;
    background: var(--PrimaryColor);
    border-radius: 5px;
    transition: .1s;
    box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
}
.prob_view > div > div > div > div:last-child > input:last-child:hover {
    background: var(--PrimaryColorShadow);
    box-shadow: none;
}
a[onclick] {
    display: inline-grid;
}
a[onclick]:hover {
    background: none;
}
a[onclick] > div {
    border: none !important;
    width: auto !important;
    height: auto !important;
    border-radius: 5px !important;
    background: var(--PrimaryColor) !important;
    padding: 5px 10px;
    margin-top: 5px !important;
    margin-left: 0px !important;
    min-height: 14px;
    min-width: 50px;
    transition: .2s;
}
a[onclick] > div:hover {
    background: var(--PrimaryColorShadow) !important;
    box-shadow: none;
}
.prob_view > div > div > div > div:last-child > span {
    padding: 5px 10px;
    font-family: 'Roboto';
    font-size: 14px;
    border: 3px solid;
    border-radius: 5px;
    display: -webkit-inline-box;
    margin: 10px 0px;
    margin-left: 40px;
}
nav.SubjectMenu.SubjectMenu_desktop.PageLayout-Nav > a {
    border: none;
}
nav.SubjectMenu.SubjectMenu_desktop.PageLayout-Nav > a:hover {
    background: none;
}
.nobreak > span:nth-child(6) > a {
    color: black !important;
    text-decoration: none !important;
    border: none !important;
    font-family: 'Inter';
    font-size: 14.5px;
    padding: 5px 10px;
    background: var(--PrimaryColor);
    border-radius: 5px;
    transition: .1s;
    box-shadow: 0 0 10px 0px var(--PrimaryColorShadow);
    margin-top: 10px;
}
.sb171f6a6 > center:nth-child(6) {
    background: var(--BlockColor);
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
    function App() {
        if(localStorage.getItem('customeTheme') == 'true' ? true : false){
        const Wrapper = document.querySelector('.wrapper');
        if(Wrapper != null){
            const Search = window.location.search
            const MainBlock = Wrapper.children[4];
            const Block = MainBlock.children[0];
            const TrashBlock = Wrapper.children[3];
            const Info = document.querySelectorAll('.prob_maindiv div div div:nth-child(4)');
    
            Block.classList.replace(Block.className, 'sb171f6a6');
            TrashBlock.classList.replace(TrashBlock.className, 'kNrBBNtTAHw');
            MainBlock.classList.replace(MainBlock.className, 'kK7h3M5jfFQjj89uVXaIS07E');
    
            Block.children[1].remove();
    
            for(let i = 0; i < Info.length; i++){
                if(Info[i].className != 'wrap_scroll_table'){
                Info[i].classList.add('InfoDel')
                };
            }
    
            Block.lastElementChild.classList.add('InfoDel');
    
            for(let i = 0; i < Block.children.length; i++){
                if(Block.children[i].textContent == "Завершить тестирование, свериться с ответами, увидеть решения."){
                Block.children[i].classList.add('Submit');
                }else if(Block.children[i].innerText == "Наверх"){
                Block.children[i].classList.add('InfoDel')
                }
            };
    
            if(Search.indexOf('theme') == 1){
                const AnswerButton = document.querySelectorAll('a[onclick] > div');
                const LinksBlock = document.createElement('div');
    
                LinksBlock.className = 'LinksBlock';
                LinksBlock.innerHTML = '<a href=/test?a=catlistwstat><div class="TestLink Link">Каталог</div></a><a href='+Search+'&ttest=true><div class="TestLink Link">Тест</div></a><a href='+Search+'&print=true><div class="TestLink Link">Скопировать</div></a>'
               
                for(let i = 0; i < AnswerButton.length; i++){
                    AnswerButton[i].className = 'AnswerButton';
                    AnswerButton[i].innerHTML = 'Решить';
                  }  
                for(let i = 0; i < Block.children.length; i++){
                if(Block.children[i].localName == "a"){
                    Block.children[i].classList.add('InfoDel')
                    }
                };
                if(Block.children[2].tagName == "SCRIPT"){
                   Block.children[2].remove();
                }
                Block.children[2].after(LinksBlock);
                }else if(Search.indexOf('id') == 1){
                  document.querySelector('.prob_list').style.marginTop = '10px';
            }
        }
        const styles = document.createElement('style');
        styles.textContent =  style;
        document.querySelector('body').append(styles);
    }
    }    
      if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', App());
      } else {
        App();
    }    
