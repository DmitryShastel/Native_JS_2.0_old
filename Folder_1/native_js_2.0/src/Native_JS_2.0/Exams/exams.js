//Start
//1
// <input id="latvia" value="it-incubator"/>
//
// <script>
//     const inputElement = document.XXX('latvia');
//     inputElement.value = '';
//
//     /* Что нужно написать вместо XXX, чтобы значение в поле ввода зачищалось?
//     В качестве ответа укажите строчку целиком.  */
//     (const inputElement = document.XXX('latvia'))
// </script>

//2
// <input id="ball" value="it-incubator"/>
//
// <script>
//     const searchInputElement = document.querySelector(XXX);
//     searchInputElement.value = '';
//
//     /*
//     Что нужно написать внутри скобок вместо XXX, чтобы значение в поле ввода зачищалось?
//     */
//      ('#ball')
// </script>

//3
// <input id="search"/>
// <button id="find">find</button>
//
// <script>
//     const searchInputElement = document.getElementById('search')
//     const lookButtonElement = document.getElementById('find')
//
//     XXX.addEventListener(YYY, () => {
//     console.log(searchInputElement.value)
// })
//
//     /*
//     Что нужно написать внутри скобок вместо XXX и YYY, чтобы при нажатии на кнопку увидеть текст, введённый в input?
//     Ответ дайте через пробел.
//     Пример ответа: firstword secondword
//     */
//   (lookButtonElement  click)
// </script>

//4
// <script>
//     let user = {
//     name: "samurai",
//     age: 18
// }
//     console.log(XXX)
// </script>
// Что нужно написать вместо XXX, чтобы в консоли увидеть возраст пользователя?

//5
// <script>
//     let user = {
//     name: 'samurai',
//     age: 18
// }
//
//     let user2 = user;
//
//     user2.name = 'ninja';
// </script>
// Чему равно значение св-ва name объекта user?

//6
// <script>
//     let user = {age: 0};
//     for (let i = 0; i < 10; i++) {
//     user.age = i;
// }
// </script>
// Чему равно значение св-ва age объекта user?

//7
// <script>
//     let skills = ['css', 'html', 'js'];
//     skills.XXX('react');
// </script>
// Что нужно написать вместо XXX, чтобы добавить в массив значение 'react'?

//8
// Сколько раз была вызывана функция yo?<script>
//     let users = ['dimych', 'valera', 'artem', 'katya']
//
//     yo();
//
//     if (users.length > 4) {
//     yo();
// } else {
//
// }
//
//     if (users.length < 2 || window !== null) {
//     yo()
// }
//
//     for (let i=0;i<1;i++) {
//     yo()
// }
//
//     function yo(){}
//    (3 раза)
// </script>


//9
// <script>
//     function hello() { alert('hello') }
// </script>
// В качестве ответа напишите вариант создания той же функции, но через стрелочный формат

//10
// <script>
//     function removeWhitespaces(string) {
//     string.split(' ').filter(s => s !== '').join('_')a
// }
//
//     console.log(removeWhitespaces('you are JS developer'))
//(return)
// </script>
// Что минимальное забыли написать внутри функции removeWhitespaces, чтобы в консоли увидеть 'you_are_JS_developer' вместо undefined?


//Monday
//Sprint#1
//1
// import ReactDOM from 'react-dom'
//
// export const YoutubeVideoBlock = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         😀 Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         📼 Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         📊 Статистика лайков
//     </div>
// }
//
// ReactDOM.render(<div>ххх</div>,
//     document.getElementById('root')
// );
//
// //Что нужно написать вместо ххх, чтобы на экране увидеть:
// //😀 Заголовок видео
// //📼 Контент видео
// //📊 Статистика лайков
// // ❗ Ответ дать минимально возможным объёмом кода

//2
// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {ххх}</div>
//     </div>
// }

//Что нужно написать вместо ххх, что бы код работал?

//3
// type PropsType = {
//     city: string        // 'minsk'
//     country: string     // 'belarus'
//     coords?: string     // '53.917501,27.604851'
// }
//
// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk'/>
// }
//
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }

// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки

//4
// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={xxx} n={yyy} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }

// Что нужно написать вместо xxx и yyy?
// Ответ дайте через пробел, например: blabla onClick(props)

//5
// Что нужно написать вместо XXX и YYY? Ответ дайте через пробел, например:
// car user
// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.XXX.title}</h1>
//             <div>{props.XXX.date}</div>
//             <div>{props.XXX.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.YYY.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }

//6
// Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?
//
//     Ответ дайте через пробел, например: props.x wallets
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={xxx} />
//         <UserWallet wallet={yyy} />
//     </div>
// }

//7
// Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
//
//     Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}
// import ReactDOM from 'react-dom'
//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader xxx />
//         <VideoContent yyy />
//         <VideoDescription zzz />
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );

//8
// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел
// import ReactDOM from 'react-dom'
//
// const CrazyButton = (props: any) => {
//
//     const style = {
//         color: props.XXX,
//         backgroundColor: props.YYY
//     }
//
//     return <button style={style}>
//         {props.ZZZ}
//     </button>
// }
//
// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )


//9
// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел
// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny XXX={'Бабуля'} YYY={'Батя'} ZZZ={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )