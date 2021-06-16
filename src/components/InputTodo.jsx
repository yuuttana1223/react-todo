import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd } = props;
  return (
    <div className="input-area">
      {/* onChangeは入力が変わるたび */}
      <input
        placeholder="TODOを入力"
        type="text"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
