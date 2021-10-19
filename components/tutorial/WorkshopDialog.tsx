import { Text } from '@chakra-ui/react'
import React from 'react'
import { HAS_SEEN_WORKSHOP_KEY } from '../../constants/storage'
import { strings } from '../../constants/strings'
import OneTimeDialog from '../common/OneTimeDialog'

const paragraphMargin = {
    marginBottom: 6,
}

const WorkshopDialog: React.FC = ({}) => {
    return (
        <OneTimeDialog
            storageKey={HAS_SEEN_WORKSHOP_KEY}
            header={strings.WORKSHOP_DIALOG_TITLE}
            body={
                <>
                    <Text {...paragraphMargin}>
                        {strings.WORKSHOP_DIALOG_BODY_1}
                    </Text>
                    <Text {...paragraphMargin}>
                        {strings.WORKSHOP_DIALOG_BODY_2}
                    </Text>
                    <Text>{strings.WORKSHOP_DIALOG_BODY_3}</Text>
                </>
            }
            closeButtonLabel={strings.WORKSHOP_DIALOG_CLOSE_BUTTON}
        />
    )
}

export default WorkshopDialog
