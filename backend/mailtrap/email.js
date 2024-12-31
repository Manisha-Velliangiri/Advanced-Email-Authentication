import { client as MailtrapClient ,sender } from "./mailtrap-config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE ,PASSWORD_RESET_SUCCESS_TEMPLATE} from "./emailTemplates.js";


export const sendverificationEmail=async(email ,verificationToken)=>{
    const recipient =[{email}]

    try{
        const response =  await MailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Hello!,successful",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
        });

        console.log("Email sent successfully",response);

    }catch(error){
        console.error(`Error sending verification`,error);

        throw new Error(`Error sending verification email: ${error}`);
            
    }
}; 

export const sendWelcomeEmail =async(email,name)=>{
    const recipient =[{email}];

    try{
        const response = await MailtrapClient.send({
            from: sender,
            to:recipient,
            template_uuid: "03e8ece1-9f6a-4617-b790-87233cf76bc1",
            template_variables: {
            },
        });

        console.log("Welcome email sent successfully",response);
    }catch(error){
        console.error(`Error sending welcome email`,error);

        throw new Error(`Email sending welcome email: ${error}`);
    }
};

export const sendPasswordResetEmail =async(email,resetURL)=>{
    const recipient=[{email}];

    try{
        const response =await MailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Reset your password",
            html:PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category:"Password Reset",
        });
    }
        catch(error){
            console.error(`Error sending password reset email`,error);

            throw new Error(`Error sending password reset email:${error}` );
        }
    
};

export const sendResetSuccessEmail = async(email) =>{
    const recipient =[{email}];

    try{
        const response = await MailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password reset",
        });

        console.log("Password reset email sent successfully",response);
    }catch(error){
        console.error(`Error sending password reset success email`,error);

        throw new Error(`Error sending password reset success email:${error}`);
    }
};