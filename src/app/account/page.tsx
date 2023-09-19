import {MyAccount} from "@/components/account/myAccount";

export default function Account() {
    return (
        <main>
            <div>
                <MyAccount fullName={'Alina Svitla'} email={'alinusya@zhopka.com'} phoneNumber={'phone number'}
                           birthDate={'04/09/93'}/>
            </div>
        </main>
    )
}