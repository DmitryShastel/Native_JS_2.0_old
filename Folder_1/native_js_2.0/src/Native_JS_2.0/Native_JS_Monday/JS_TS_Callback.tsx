



export const User = () => {

    const deleteUser = () => {
        alert('the user should be deleted')
    }

    const saveUser = () => {
        alert('the user is saved')
    }

    return (
        <div>Dima
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}