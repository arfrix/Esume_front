import ImageUploader from "../components/imageUploader";
import ListItems from "../components/ListItems";
import StepManager from "../components/stepManager/StepManager"


export default function Home() {
  const config = [
    {
      component: ListItems,
      order: 1
    }
  ]
    return (
        <div>
            <StepManager currentStep={1} childComponentOrder={1}>
              <ListItems hasDatePicker />
            </StepManager>
        </div>
    )
}