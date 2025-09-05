import x from 'src/assets/x.svg'

interface ICheckboxprops {
  checked: boolean
}

export const Checkbox = (props: ICheckboxprops) => {
  return (
    <div className={`checkbox ${props.checked ? 'active' : ''}`}>
      <img src={x} alt="" />
    </div>
  )
}
