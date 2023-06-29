import Button from "../Utilities/Button";

const Place = () => {
    return(
        <div className="flex flex-col items-center justify-center mt-4">
            <div>
                <img src="" alt="ini carousel" />
                <div className="flex">
                    <div>
                        <img src="" alt="ini maps" />
                        <Button title='Open Maps' class='text-white hover:bg-white hover:text-black' />
                    </div>
                    <div>
                        <h3>Barelang Bridge</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place