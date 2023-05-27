import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import supabase from '../config/supabaseClient'
import Navigation from '../components/Navigation'
import FormHeading from '../components/FormHeading'
import { Label, TextInput, Button, Alert } from 'flowbite-react'

const UpdatePassword = () => {
    const [errorAlert, setErrorAlert] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            password: '',
            confirm: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, 'Password minimal 8 karakter')
                .required('Password harus diisi'),

            confirm: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password tidak sama')
        }),

        onSubmit: async (values) => {
            const { password } = values
            try {
                setLoading(true)
                const { data } = await supabase.auth.updateUser({
                    password: password
                })

                if (data) {
                    setShowAlert(true)
                }
            } catch (error) {
                setErrorAlert(true)
                setShowAlert(true)
            } finally {
                setLoading(false)
            }
        }
    })

    return (
        <div>
            <Navigation currentPage="Update Password" />

            {
                showAlert && (
                    <Alert
                        color={errorAlert === true ? 'failure' : 'success'}
                    >
                        <span>
                            <span className="font-medium">
                                {errorAlert === true ? 'Gagal!' : 'Berhasil!'}
                            </span>
                            {' '} {errorAlert === true ? 'Gagal mereset password, silahkan coba lagi beberapa saat' : 'Password berhasil diganti, silahkan login kembali'}
                        </span>
                    </Alert>
                )
            }

            <div className='flex justify-center pt-2'>
                <div className='w-[700px] sm:w-[500px] md:w-[600px] p-5'>
                    <FormHeading
                        heading={"Lupa Password"}
                        info={"Masukkan password baru anda untuk mengganti password lama."}
                    />

                    <form className="flex flex-col gap-4 mt-6" onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="block mb-2">
                                <Label
                                    htmlFor="password"
                                    value="Masukkan password baru"
                                    color={formik.errors.password ? 'failure' : ''}
                                />
                            </div>
                            <TextInput
                                id="password"
                                name='password'
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                placeholder="Masukkan password baru"
                                color={formik.errors.password ? 'failure' : ''}
                                helperText={formik.errors.password}
                                shadow={true}
                            />
                        </div>

                        <div>
                            <div className="block mb-2">
                                <Label
                                    htmlFor="confirm"
                                    value="Konfirmasi password baru"
                                    color={formik.errors.confirm ? 'failure' : ''}
                                />
                            </div>
                            <TextInput
                                id="confirm"
                                name='confirm'
                                type="password"
                                value={formik.values.confirm}
                                onChange={formik.handleChange}
                                placeholder="Konfirmasi password baru"
                                color={formik.errors.confirm ? 'failure' : ''}
                                helperText={formik.errors.confirm}
                                shadow={true}
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={loading ? true : ''}>
                            {loading ? 'Loading' : 'Reset Password'}
                        </Button>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default UpdatePassword