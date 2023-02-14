export default function Login()
{
    return (
        <form className="login__form" action="login_submit" method="get" accept-charset="utf-8">
            <label className="login__label" htmlFor="mail">
                E-mail
                <input className="login__input" type="mail" placeholder="example@domain.xyz" name="mail" required/>
            </label>
            <label className="login__label" htmlFor="pwd">
                Пароль
                <input className="login__input" type="password" placeholder="" name="pwd" required/>
            </label>
            <div className="text-center">
                <input value="Авторизоваться" type="submit" className="login__button"/>
            </div>
        </form>
    )
}
