

export const enrollFingerprint = (): Promise<number | null> => {
    return fetch(`http://${process.env.ESP_IP}/enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            return data.fingerId;
        } else {
            return null;
        }
    })
    .catch(error => {
        console.error("Fingerprint enrollment error:", error);
        return null;
    });
}

export const verifyFingerprint = (): Promise<number | null> => {
    return fetch(`http://${process.env.ESP_IP}/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            return data.fingerId;
        } else {
            return null;
        }
    })
    .catch(error => {
        console.error("Fingerprint enrollment error:", error);
        return null;
    });
}