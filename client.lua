CreateThread(function()
  while true do
    Wait(0)
    SendNUIMessage({
      action = "updateRotation",
      rotation = GetGameplayCamRot().z
    })
  end
end)