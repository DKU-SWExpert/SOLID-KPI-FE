// RadioGroup.tsx

import React from "react"
import { CInputGroup } from "@coreui/react"

// 라디오 항목 하나하나의 타입
interface RadioOption {
  label: string
  value: string
}

// 컴포넌트에 필요한 Props
interface RadioGroupProps {
  options: RadioOption[]           // 라디오 목록
  selectedValue: string            // 현재 선택된 값
  onChange: (value: string) => void // 선택이 바뀌면 호출될 함수
  name: string                     // 라디오 name 속성 (여러 라디오 그룹 구분용)
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
  name
}) => {
  return (
    <div className="d-flex gap-4">
      {options.map((opt) => (
        <CInputGroup key={opt.value} className="align-items-center">
          <input
            type="radio"
            id={`${name}_${opt.value}`}  // id는 중복 방지
            name={name}
            value={opt.value}
            checked={selectedValue === opt.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <label htmlFor={`${name}_${opt.value}`} className="text-white ms-2">
            {opt.label}
          </label>
        </CInputGroup>
      ))}
    </div>
  )
}

export default RadioGroup
