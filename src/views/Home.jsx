import ImageUploader from "../components/imageUploader";
import ListItems from "../components/ListItems";

export default function Home() {
    return (
        <div>
            <ImageUploader width={160} height={160} onUpload={img => console.log(img)} />
            <br />
            <ListItems hasDatePicker />
        </div>
    )
}