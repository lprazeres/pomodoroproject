import { FormContainer, TaskInput, MinutesAmountInput } from './styles';
import { CyclesContext } from '../../../../contexts/CyclesContext';
import { useContext } from 'react';
import {useFormContext} from 'react-hook-form';





export function NewCycleForm() {

    const { activeCycle } = useContext(CyclesContext)

    const {register} = useFormContext()


    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                id="task"
                list="taks-suggestions"
                placeholder='Dê um nome para seu projeto'
                {...register('task')}
                disabled={!!activeCycle}
            />

            <datalist id="taks-suggestions">
                <option value="Projeto 1" />
                <option value="Projeto 2" />
                <option value="Projeto 3" />
                <option value="Banana" />
            </datalist>

            <label htmlFor="minutesAmount">Vou trabalhar em</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder='00'
                step={5}
                min={1}
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>Minutes.</span>
        </FormContainer>
    )
}

