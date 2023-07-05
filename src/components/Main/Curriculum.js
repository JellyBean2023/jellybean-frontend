import { styled } from "styled-components";
import CurriculumBox from "./CurriculumBox";

const list = [
    { id: "pm", title: "프로덕트 매니저 2기", state: true, content: "뼈 끝에 스며들어 가는 멸락의 소리다이것은 피어나기 전인 유소년" },
    { id: "java", title: "풀스택 1기", state: false, content: "뼈 끝에 스며들어 가는 멸락의 소리다이것은 피어나기 전인 유소년" },
    { id: "bigdata", title: "빅데이터 4기", state: false, content: "뼈 끝에 스며들어 가는 멸락의 소리다이것은 피어나기 전인 유소년" },
]

const CurriculumContainer = styled.section`
    background-color: peachpuff;
`;


const Curriculum = () => {
    return (
        <CurriculumContainer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex items-center h-full">
                <div className="flex flex-wrap -m-4">
                    {list.map((v,i) => (
                        <CurriculumBox key={i} variable={v}/>
                    ))}
                </div>
            </div>
        </CurriculumContainer>
    );
}

export default Curriculum;