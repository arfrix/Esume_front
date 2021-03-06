import ImageUploader from "../components/imageUploader";
import ListItems from "../components/ListItems";
import StepManager from "../components/stepManager/StepManager"
import SkillLevel from "../views/SkillLevel"
import TechStackSelection from "../views/TechStackSelection"
import ItemAdder from "../components/itemAdder/ItemAdder"

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
              <ItemAdder />
            </StepManager>
            <StepManager currentStep={1} childComponentOrder={3}>
              <SkillLevel hasDatePicker />
            </StepManager>
            <StepManager currentStep={1} childComponentOrder={2}>
              <TechStackSelection hasDatePicker />
            </StepManager>
        </div>
    )
}