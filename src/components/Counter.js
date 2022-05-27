import React from 'react';

// props로 넘어온애들을 일단 다 써줌
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {

	// 버튼이벤트
  const onChange = e => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
    // parseInt(값,진법)
    onSetDiff(parseInt(e.target.value, 10));
  };
  
  return (
    <div>
     {/* // 보여줄 숫자 */}
      <h1>{number}</h1>
      <div>
        {/* // input창에 띄워줄 숫자, diff의 값을 가져와서 보여준다. min은 없어도 되지만,
        // 혹시모를 상황에 대비해서 넣으신거 같다(최소값) */}
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;