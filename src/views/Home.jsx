import ImageUploader from "../components/imageUploader";

export default function Home() {
    return (
        <div>
            <ImageUploader width={160} height={160} onUpload={img => console.log(img)} />
        </div>
    )
}