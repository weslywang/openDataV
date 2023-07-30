import type { MetaContainerItem } from 'open-data-v/designer/type'
import { ComponentGroup, FormType } from 'open-data-v/enum'
import { CustomComponent } from 'open-data-v/models'

export const componentName = 'Decoration4'
class DecorationComponent extends CustomComponent {
  constructor(id?: string, name?: string) {
    super({
      component: componentName,
      group: ComponentGroup.DECORATION,
      name: name ? name : '4#装饰',
      id,
      width: 200,
      height: 10
    })
  }

  _prop: MetaContainerItem[] = [
    {
      label: '基础配置',
      prop: 'base',
      children: [
        {
          prop: 'color1',
          label: '颜色1',
          type: FormType.COLOR,
          props: {
            defaultValue: '#00c2ff'
          }
        },
        {
          prop: 'color2',
          label: '颜色2',
          type: FormType.COLOR,
          props: {
            defaultValue: '#00C2FF42'
          }
        }
      ]
    }
  ]
  _style: MetaContainerItem[] = []
}

export default DecorationComponent
