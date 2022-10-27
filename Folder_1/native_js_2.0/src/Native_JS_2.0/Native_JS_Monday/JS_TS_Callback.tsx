



export const User = () => {

    const deleteUser = () => {
        alert('the user should be deleted')
    }

    return (
        <div>Dima
            <button onClick={deleteUser}>delete</button>
            <button>save</button>
        </div>
    )
}