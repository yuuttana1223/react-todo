import React, { useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // index(引数1)番目からひとつ(引数2)の要素を削除
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodo = newIncompleteTodos.splice(index, 1);
    // addTodoのところはIncompleteTodos[index]でも可
    setCompleteTodos([...completeTodos, newCompleteTodo]);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const newIncompleteTodo = newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos([...incompleteTodos, newIncompleteTodo]);
  };

  return (
    <>
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
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              // keyは何個目の要素かを覚えておくための目印
              <li key={todo}>
                <span>{todo}</span>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 関数に引数を渡す場合 */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <span>{todo}</span>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
