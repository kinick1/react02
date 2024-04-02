import logo from './logo.svg';
import './App.css';


// JSX 문법 : Javascript와 html을 구분없이 한번에 사용할수 있는 문법
// 규칙1 : 사용자 정의 태그(컴포넌트)에서 출력하고자 하는 내용은 반드시 하나의 태그로 묵여있어야한다.
// 규칙2 : 표현식{} 를 이용해서 javascript에 있는 데이터를 출력할수 있다.
// ---> if, for 사용할수 없다. -> 삼항연산자를 이용해 작성가능
// 규칙3 : JSX에서는 class라는 키워드 대신 className이라는 키워드를 사용한다!!
// 규칙4 : JSX에서는 반드시 여는태그와 닫는 태그가 존재한다.
function App() {
  // let name="준";
  // let myStyle={
  //   backgroundColor:"black",
  //   color:"aqua"
  // }

  let prom=prompt("이름을 입력해주세요");
  let today = new Date();  
  let month = today.getMonth() -3;  // 월
  let year= today.getFullYear();
  
  if(month=='3'||month=='4'||month=='5'){
    <h1>{prom}님 지금은 봄입니다.</h1>
  }
  else if(month=='6'||month=='7'||month=='8'){
    <h1>{prom}님 지금은 여름입니다.</h1>
  }
  else if(month=='9'||month=='10'||month=='11'){
    <h1>{prom}님 지금은 가을입니다.</h1>
  }
  else{
    <h1>{prom}님 지금은 겨울입니다.</h1>
  }
  return (

      

        <div>{

            <h1>{prom}님 지금은 {season}입니다.</h1>
          }</div>

      


  // <div>    
  //   <div>
  //     {/* name에 있는 값이 '준'이라면 준 react 첫시작 
  //         '준' 이 아니라면 '오늘은 칼되!!'
  //     */}
  //     {
  //       name==='준'? <h1 className='alpha'>{name}의 react 첫 시작</h1>:<h1>react 두번째 시작</h1>
  //     }
  //   </div>
  //   <div>
  //     {/* 
  //       JSX에서 태그에 바로 스타일 적용시켜줄땐
  //       Javascript 객체 형식으로 적용해줘야한다
  //     */}
  //     <h1 style={myStyle}>react 첫 시작</h1>
  //     <h1>react 두번째 시작</h1>
  //   </div>
  // </div>

  );
}

export default App;
