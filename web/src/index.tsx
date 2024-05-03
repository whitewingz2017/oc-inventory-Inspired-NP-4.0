import { render } from 'solid-js/web'

import './index.css'

const root = document.getElementById('root')

import { App as Provider } from './components/provider'
import { Inventory } from './components/inventory/Inventory'

render(() => (
    <Provider>
        <Inventory />
    </Provider>
), root!)