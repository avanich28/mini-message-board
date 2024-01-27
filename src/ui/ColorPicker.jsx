import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

function ColorPicker({ onClickOutside, onEmojiSelect }) {
  return (
    <div className="absolute bottom-[20px]">
      <Picker
        data={data}
        theme="light"
        onClickOutside={onClickOutside}
        onEmojiSelect={onEmojiSelect}
      />
    </div>
  );
}

export default ColorPicker;
