// Components
import { HeaderArea } from './components/HeaderArea';
import { BannerArea } from './components/BannerArea';
import { MethodologyArea } from './components/MethodologyArea';
import { ObjectiveArea } from './components/ObjectiveArea';
import { AutoSliderArea } from './components/AutoSliderArea';
import { TeacherArea } from './components/TeacherArea';
import { DepoimentsArea } from './components/DepoimentsArea';
import { QuestionArea } from './components/QuestionArea';
import { FooterArea } from './components/FooterArea';


function App() {
  return (
    <main className="h-screen flex flex-col">

      <HeaderArea />
      <BannerArea />
      <MethodologyArea />
      <ObjectiveArea />
      <TeacherArea />
      <DepoimentsArea />
      <QuestionArea />
      <FooterArea />

    </main>
  );
}

export default App;
