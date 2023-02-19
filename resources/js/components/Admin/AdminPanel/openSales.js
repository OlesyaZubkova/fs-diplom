import Button from "../Buttons/btn";

export default function OpenSales()
{
    return (
        <div className="conf-step__wrapper text-center">
            <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
            <Button text={"Открыть продажу билетов"} callback={() => console.log('Going to ...')}/>
        </div>
    );
}
