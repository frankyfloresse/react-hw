import {useForm} from "react-hook-form";
import {ICarCreateRequest} from "../../models/ICarCreateRequest.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../../validators/car.validator.ts";
import {createCar} from "../../services/car.service.ts";
import {useNavigate} from "react-router-dom";

const CarForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}} =
        useForm<ICarCreateRequest>({mode: "all", resolver: joiResolver(carValidator)});

    let navigate = useNavigate();

    const handleCreateCar = async (formBody: ICarCreateRequest) => {
        await createCar(formBody);
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleCreateCar)} >
                <div>
                    <label>
                        <input type="text" {...register('brand')} />
                    </label>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </div>

                <div>
                    <label>
                        <input type="number" {...register('price')} />
                    </label>
                    {errors.price && <div>{errors.price.message}</div>}
                </div>

                <div>
                    <label>
                        <input type="text" {...register('year')} />
                    </label>
                    {errors.year && <div>{errors.year.message}</div>}
                </div>

                <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

export default CarForm;