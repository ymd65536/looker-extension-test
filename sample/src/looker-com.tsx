
import { Space, ComponentsProvider, Span } from '@looker/components'
import { TextArea, ComboboxInput, Combobox, ComboboxList, ComboboxOption, ComboboxProps} from '@looker/components'

export const HelloWorld = (props: ComboboxProps) => {
  const { width = 300, ...restProps } = props
  return (
    <>
      <ComponentsProvider>
        <Space around>
          <Span fontSize="xxxxxlarge">
            Hello
          </Span>
        </Space>
        <TextArea />
        <Combobox width={width} {...restProps}>
      <ComboboxInput />
      <ComboboxList>
        <ComboboxOption value="Apples super long text to see what wrapping looks like" />
        <ComboboxOption value="Oranges" />
        <ComboboxOption value="Grapes" />
        <ComboboxOption value="Bananas" />
        <ComboboxOption value="Pineapples" />
        <ComboboxOption
          value=""
          label="Create New Option"
          highlightText={false}
        />
      </ComboboxList>
    </Combobox>
      </ComponentsProvider>
    </>
  )
}
