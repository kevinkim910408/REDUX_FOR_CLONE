import React from 'react';
// 값을 수정하기 위해 import
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';

// counter reducer에서 가져온 액션함수
import { increase, decrease, setDiff } from '../redux/modules/counter';

function CounterContainer() {

  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
  // 비구조화로 객체의 경우 좌항과 우항이 매칭된다, 데이터를 store에서 가져와서 이름을 붙혀줬다.
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  //-> 그냥 CRUD할땐 무조건 dispatch를 써야한다, 그래서 무조건 이렇게 선언해야한다.
  const dispatch = useDispatch();
  
  // 함수를 만드는데, 그 함수를 dispatch를 이용해서 reducer에서 만든애들을 불러와야한다.
  const onIncrease = () => {
    dispatch(increase());
  }

  const onDecrease = () => {
    dispatch(decrease());
  }
  
  const onSetDiff = (diff) => {
    dispatch(setDiff(diff));
  }

  return (
    <Counter
      // 상태를 props로 전달
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;