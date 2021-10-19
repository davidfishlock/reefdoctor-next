import { Text } from '@chakra-ui/react'
import React from 'react'
import { HAS_SEEN_QUIZ_KEY } from '../../constants/storage'
import { strings } from '../../constants/strings'
import OneTimeDialog from '../common/OneTimeDialog'

const paragraphMargin = {
    marginBottom: 6,
}

const QuizDialog: React.FC = ({}) => {
    return (
        <OneTimeDialog
            storageKey={HAS_SEEN_QUIZ_KEY}
            header={strings.QUIZ_DIALOG_TITLE}
            body={
                <>
                    <Text {...paragraphMargin}>
                        {strings.QUIZ_DIALOG_BODY_1}
                    </Text>
                    <Text {...paragraphMargin}>
                        {strings.QUIZ_DIALOG_BODY_2}
                    </Text>
                    <Text>{strings.QUIZ_DIALOG_BODY_3}</Text>
                </>
            }
            closeButtonLabel={strings.QUIZ_DIALOG_CLOSE_BUTTON}
        />
    )
}

export default QuizDialog
