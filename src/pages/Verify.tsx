import { zodResolver } from '@hookform/resolvers/zod';
import { Dot } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'sonner';
import z from 'zod';
import { Button } from '../components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../components/ui/form';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '../components/ui/input-otp';
import { cn } from '../lib/utils';
import {
    useSendOtpMutation,
    useVerifyOtpMutation,
} from '../redux/features/auth/auth.api';

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: 'Your one-time password must be 6 characters.',
    }),
});

const Verify = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email] = useState(location.state);
    const [confirmed, setConfirmed] = useState(false);
    const [sendOtp] = useSendOtpMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const [timer, setTimer] = useState(120);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const userInfo = {
            email,
            otp: data.pin,
        };
        const toastId = toast.loading('Verifying OTP...');
        try {
            const res = await verifyOtp(userInfo).unwrap();
            if (res.success) {
                toast.success('OTP verified successfully', { id: toastId });
            } else {
                toast.error(res.message, { id: toastId });
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to verify OTP', { id: toastId });
        }
    };

    const handleSendOtp = async () => {
        const toastId = toast.loading('Sending OTP...');
        try {
            const res = await sendOtp({
                email: email,
            }).unwrap();

            if (res.success) {
                toast.success('OTP sent successfully', { id: toastId });
                setConfirmed(true);
                setTimer(120);
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to send OTP', { id: toastId });
        }
    };

    useEffect(() => {
        if (!email) {
            navigate('/');
        }
    }, [email, navigate]);

    useEffect(() => {
        if (!email || !confirmed) {
            return;
        }

        const timerId = setInterval(() => {
            setTimer((prev) => (prev - 1 > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timerId);
    }, [email, confirmed]);

    return (
        <div className='grid place-content-center h-screen'>
            {confirmed ? (
                <Card className=''>
                    <CardHeader>
                        <CardTitle className='text-xl'>
                            Verify your email: {email}
                        </CardTitle>
                        <CardDescription>
                            Please check your email inbox and click on the
                            verification link to verify your email address.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                id='otp-form'
                                onSubmit={form.handleSubmit(onSubmit)}
                                className=' space-y-6'
                            >
                                <FormField
                                    control={form.control}
                                    name='pin'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='mb-2'>
                                                One-Time Password
                                            </FormLabel>
                                            <FormControl>
                                                <InputOTP
                                                    maxLength={6}
                                                    {...field}
                                                >
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={0}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={1}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={2}
                                                        />
                                                    </InputOTPGroup>
                                                    <Dot />
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={3}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={4}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={5}
                                                        />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </FormControl>
                                            <FormDescription>
                                                <Button
                                                    onClick={handleSendOtp}
                                                    type='button'
                                                    disabled={timer === 0}
                                                    variant={'link'}
                                                    className={cn('p-0 m-0', {
                                                        'cursor-pointer':
                                                            timer === 0,
                                                        'opacity-50': timer > 0,
                                                    })}
                                                >
                                                    Resend OTP :{' '}
                                                </Button>
                                                {timer}
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className='flex justify-end'>
                        <Button form='otp-form' type='submit'>
                            Verify OTP
                        </Button>
                    </CardFooter>
                </Card>
            ) : (
                <Card className=''>
                    <CardHeader>
                        <CardTitle className='text-xl'>
                            Verify your email: {email}
                        </CardTitle>
                        <CardDescription>
                            We will send you an OTP to your email address
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className=''>
                        <Button onClick={handleSendOtp} className='w-[300px]'>
                            Confirm
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default Verify;
