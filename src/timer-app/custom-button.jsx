function CustomButton({
  styleName = "btn-primary",
  title,
  handleClick,
  disabled,
}) {
  return (
    <button
      className={`btn ${styleName}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {/* <button className={`btn ${styleName}`} onClick={() => handleClick("Dinsh")}> */}
      {title}
    </button>
  );
}
export default CustomButton;
// <button className={"btn "+styleName}
