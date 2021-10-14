import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TransactionCreateStepTwo from "components/TransactionCreateStepTwo"
import { DefaultPrivacyLevel, User } from "models"

test('if an amount and note is entered, the pay button becomes enabled', async () => {
    render(
        <TransactionCreateStepTwo
            sender={createDumbUser()}
            receiver={createDumbUser()}
            createTransaction={() => {}}
            showSnackbar={() => {}}
        />
    )

    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled()

    userEvent.type(screen.getByPlaceholderText(/amount/i), '50')
    userEvent.type(screen.getByPlaceholderText(/add a note/i), 'dinner')

    expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled()
})

function createDumbUser(): User {
    return {
        "id": "qywYp6hS0U",
        "uuid": "f96efce8-1909-4df4-b5cd-59883cd19c37",
        "firstName": "Arely",
        "lastName": "Kertzmann",
        "username": "Tavares_Barrows",
        "password": "$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW",
        "email": "Aniya_Powlowski36@hotmail.com",
        "phoneNumber": "537-041-4355",
        "avatar": "https://cypress-realworld-app-svgs.s3.amazonaws.com/qywYp6hS0U.svg",
        "defaultPrivacyLevel": DefaultPrivacyLevel.private,
        "balance": 101805,
        "createdAt": new Date("2019-09-09T13:48:45.489Z"),
        "modifiedAt": new Date("2020-05-21T02:34:01.483Z"),
    }
}
