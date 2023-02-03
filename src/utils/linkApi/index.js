export const linkApi = "http://10.0.2.2:8000/api"
export const imgUrl = 'http://10.0.2.2:8000/uploads'
export const gloUrl = 'http://10.0.2.2:8000/images'
export const checkCat = (cat) => {
    if (cat == '633a533bcbf97b94f8396ff2') {
        return 1
    }
    if (cat == '633a5379cbf97b94f8396ff3') {
        return 2
    }
    return 3
}