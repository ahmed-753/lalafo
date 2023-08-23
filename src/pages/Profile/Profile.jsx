import React from 'react';

const Profile = () => {
    return (
        <>
            <div className="container">
                <div className="profile">
                    <div className="profile__list">
                            <div className="profile__menu">
                                <p className="profile__menu-list">Мои объявления</p>
                                <p className="profile__menu-list">Сообщения</p>
                                <p className="profile__menu-list">Настройки профиля</p>
                            </div>
                        <div className="profile__pages">
                            <p className="profile__pages-list">Активно ()</p>
                            <p className="profile__pages-list">Деактивировано ()</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Profile;