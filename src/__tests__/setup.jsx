
import { afterEach,beforeEach,vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
global.baseTasks=[{id:1,title:"Buy groceries",completed:false},{id:2,title:"Finish React project",completed:false}]
global.setFetchResponse=(data)=>{ global.fetch=vi.fn(()=>Promise.resolve({json:()=>Promise.resolve(data)})); }
afterEach(()=>cleanup());
