import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { strings } from "../../constants/strings";

const headingStyle = {
    fontSize: 'lg',
    marginTop: 8,
    marginBottom: 1,
}

const FTUDialogContent: React.FC = ({
}) => {
    return (
        <>
            <Text>{strings.FTU_DIALOG_INTRO}</Text>

            <Heading {...headingStyle}>{strings.FTU_DIALOG_WORKSHOP_TITLE}</Heading>
            <Text>{strings.FTU_DIALOG_WORKSHOP_DESCRIPTION}</Text>

            <Heading {...headingStyle}>{strings.FTU_DIALOG_QUIZ_TITLE}</Heading>
            <Text>{strings.FTU_DIALOG_QUIZ_DESCRIPTION}</Text>

            <Heading {...headingStyle}>{strings.FTU_DIALOG_CATALOG_TITLE}</Heading>
            <Text>{strings.FTU_DIALOG_CATALOG_DESCRIPTION}</Text>
        </>
    )
}

export default FTUDialogContent
